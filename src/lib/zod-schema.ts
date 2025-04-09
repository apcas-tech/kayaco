import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().min(1, 'Email is required'),
	password: z.string().min(1, 'Password is required').max(32, 'Password is too long')
});

export const registerSchema = z.object({
	f_name: z.string().min(1, 'First name is required').max(100, 'First name is too long'),
	l_name: z.string().min(1, 'Last name is required').max(100, 'Last name is too long'),
	email: z.string().email('Invalid email'),
	PhoneNo: z.string().min(11, 'Phone number should be 11 digits').max(11, 'Invalid Phone Number'),
	password: z.string()
	.min(8, 'Password must be at least 8 characters')
	.max(32, 'Password is too long')
	.regex(/[a-z]/, 'Password must contain at least one lowercase letter') 
	.regex(/[A-Z]/, 'Password must contain at least one uppercase letter') 
	.regex(/[0-9]/, 'Password must contain at least one number') 
	.regex(/[@$!%*?&]/, 'Password must contain at least one special character'), 
	confirmPassword: z.string().min(8, 'Confirm password is required').max(32, 'Confirm password is too long')
  }).refine((data) => data.password === data.confirmPassword, {
	message: "Passwords don't match",
	path: ['confirmPassword'],
  });


export const addressSchema = z.object({
	house_num: z.string().min(1, 'House number is required').max(100, 'House number is too long'),
	street: z.string().min(1, 'Street name is required').max(100, 'Street name is too long'),
	city: z.string().min(1, 'City name is required').max(100, 'City name is too long'),
	province: z.string().min(1, 'Province name is required').max(100, 'Province name is too long'),
	zip: z.number().min(1, 'Zip code is required').max(100, 'Zip code is too long')
  });

export const productSchema = z.object({
	product_name: z.string().min(1, 'Product name is required').max(100, 'Product name is too long'),
	description: z.string().min(1, 'Description is required').max(100, 'Description is too long'),
	price: z.number().min(1, 'Price is required').max(100, 'Price is too long'),
	quantity: z.number().min(1, 'Quantity is required').max(100, 'Quantity is too long'),
	image_url: z.string().min(1, 'Image URL is required').max(100, 'Image URL is too long')
	});

export const categorySchema = z.object({
	category: z.string().min(1, 'Category name is required').max(100, 'Category name is too long')
	});

export const promotionSchema = z.object({
	name: z.string().min(1, 'Promotion name is required').max(100, 'Promotion name is too long'),
	description: z.string().min(1, 'Description is required').max(100, 'Description is too long'),
	startdate: z.date(),
	expiration: z.date(),
	});







export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type AddressSchema = z.infer<typeof addressSchema>;
export type ProductSchema = z.infer<typeof productSchema>;
export type CategorySchema = z.infer<typeof categorySchema>;
export type PromotionSchema = z.infer<typeof promotionSchema>;

