import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";

export const vaultsTable = pgTable("vaults", {
  id: serial("id").primaryKey(),
  walletAddress: text("wallet_address").notNull().unique(),
  vaultContractAddress: text("vault_contract_address").notNull(),
  networkId: integer("network_id").notNull().default(11155111),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const transactionsTable = pgTable("transactions", {
  id: serial("id").primaryKey(),
  walletAddress: text("wallet_address").notNull(),
  txHash: text("tx_hash").notNull().unique(),
  type: text("type").notNull(),
  tokenAddress: text("token_address").notNull(),
  tokenSymbol: text("token_symbol").notNull(),
  tokenName: text("token_name").notNull(),
  amount: text("amount").notNull(),
  fromAddress: text("from_address").notNull(),
  toAddress: text("to_address"),
  networkId: integer("network_id").notNull().default(11155111),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Vault = typeof vaultsTable.$inferSelect;
export type InsertVault = typeof vaultsTable.$inferInsert;
export type Transaction = typeof transactionsTable.$inferSelect;
export type InsertTransaction = typeof transactionsTable.$inferInsert;
