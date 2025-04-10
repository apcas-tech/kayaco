import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms';
import { registerSchema } from '$lib/zod-schema';
import { zod } from 'sveltekit-superforms/adapters';
import { hash } from '@node-rs/argon2';
import db from '$lib/server/db/index.js';
import postgres from 'postgres';
import { user } from '$lib/server/db/schema.js';

export const load: PageServerLoad = async () => {
	return {
		loginForm: await superValidate(zod(registerSchema))
	};
};
export const actions: Actions = {
	register: async (event) => {
		const form = await superValidate(event, zod(registerSchema));

		if (!form.valid) {
			console.log('INVALID FORM');
			return fail(400, {
				form
			});
		}

		const { f_name, l_name, email, PhoneNo, password, confirmPassword } = form.data;

		const userId = crypto.randomUUID();

		if (password !== confirmPassword) {
			return setError(form, 'confirmPassword', 'Passwords do not match');
		}

		const hashedPassword = await hash(password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		try {
			await db.insert(user).values({
				id: userId,
				f_name,
				l_name,
				email,
				phone: PhoneNo,
				access: 'voice_commands',
				hashedPassword,
				role: 'user'
			});
		} catch (e) {
			if (e instanceof postgres.PostgresError) {
				if (e.constraint_name === 'auth_user_email_unique') {
					return setError(form, 'email', 'Email already taken');
				}
			}
			console.error(e);
			return setError(form, '', 'Unable to create account');
		}
	}
};
