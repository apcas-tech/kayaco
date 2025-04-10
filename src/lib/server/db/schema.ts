import { pgTable, text, timestamp, pgEnum, decimal, integer } from 'drizzle-orm/pg-core';

const userRoles = ['user', 'admin'] as const;
export type UserRole = (typeof userRoles)[number];
export const userRole = pgEnum('role', userRoles);

const orderStatuses = ['Pending', 'Processing','Completed','Delivered','Cancelled'] as const;
export type OrderStatus = (typeof orderStatuses)[number];
export const orderStatus = pgEnum('order_status', orderStatuses);

const access = ['voice_commands', 'text_to_speech','adjustable_text_size', 'customizable_contrast_mode'] as const;
export type access = (typeof access)[number];
export const Access = pgEnum('access', access);

const rating = ['1', '2', '3','4','5'] as const;
export type rating= (typeof rating)[number];
export const Rating = pgEnum('rating', rating);

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	f_name: text('f_name').notNull(),
	l_name: text('l_name').notNull(),
	email: text('email').notNull().unique(),
	phone: text('phone').notNull().unique(),
	access: Access('access').notNull(),
	hashedPassword: text('hashed_password').notNull(),
	role: userRole('role').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});

export const address = pgTable('address', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => user.id,{ onDelete: 'cascade' }),
	house_num: text('house_num').notNull(),
	street: text('street').notNull(),
	city: text('city').notNull().unique(),
	province: text('province').notNull().unique(),
	zip: integer('zip').notNull(),
});

export const category = pgTable('category', {
	id: text('id').primaryKey(),
	category_name: text('category_name').notNull().unique(),
});

export const product = pgTable('product', {
	id: text('id').primaryKey(),
	categoryId: text('category_id').notNull().references(() => category.id,{ onDelete: 'cascade' }),
	product_name: text('product_name').notNull().unique(),
	description: text('description').notNull(),
	price: decimal('price').notNull(),
	quantity: integer('quantity').notNull(),
	image_url: text('image_url').notNull(),
});

export const cart = pgTable('cart', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => user.id,{ onDelete: 'cascade' }),
});

export const cartItem = pgTable('cart_item', {
	id: text('id').primaryKey(),
	cartId: text('cart_id').notNull().references(() => cart.id, { onDelete: 'cascade' }),
	productId: text('product_id').notNull().references(() => product.id, { onDelete: 'cascade' }),
	quantity: integer('quantity').notNull(),
});

export const orders = pgTable('orders', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	totalAmount: decimal('total_amount', { precision: 10, scale: 2 }).notNull(),
	status: orderStatus('status').default('Pending'),
	shippingAddress: text('address').notNull().references(() => address.id, { onDelete: 'cascade' }),
	orderdate: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  });

  export const order_items = pgTable('order_items', {
	id: text('id').primaryKey(),
	orderId: text('order_id').notNull().references(() => orders.id, { onDelete: 'cascade' }),
	productId: text('product_id').notNull().references(() => product.id, { onDelete: 'cascade' }),
	totalAmount: decimal('total_amount', { precision: 10, scale: 2 }).notNull(),
	quantity: integer('quantity').notNull(),
  });

export const promotion = pgTable('promotion', {
	id: text('id').primaryKey(),
	productId: text('product_id').notNull().references(() => product.id, { onDelete: 'cascade' }),
	category: text('category').notNull().references(() => category.id, { onDelete: 'cascade' }),
	name: text('name').notNull(),
	description: text('description').notNull(),
	startdate: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	expiration: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	discount: decimal('discount', { precision: 10, scale: 2 }).notNull(),
});

export const reviews = pgTable('reviews', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	order_itemsId: text('order_items_id').notNull().references(() => order_items.id, { onDelete: 'cascade' }),
	category: text('category').notNull().references(() => category.id, { onDelete: 'cascade' }),
	rating: Rating('rating').notNull(),
	description: text('description').notNull(),
	startdate: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	expiration: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
	discount: decimal('discount', { precision: 10, scale: 2 }).notNull(),
});


export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type Address = typeof address.$inferSelect;
export type cart = typeof cart.$inferSelect;
export type cart_item = typeof cartItem.$inferSelect;
export type product = typeof product.$inferSelect;
export type category = typeof category.$inferSelect;
export type order = typeof orders.$inferSelect;
export type order_item = typeof order_items.$inferSelect;
export type promotion = typeof promotion.$inferSelect;
export type review = typeof reviews.$inferSelect;

