# Qryptum DB

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg)](LICENSE)

Database schema for the Qryptum protocol, built with Drizzle ORM and PostgreSQL.

## Schema

### vaults

Stores one record per user wallet after their Qrypt-Safe is created on-chain.

| Column | Type | Description |
|---|---|---|
| id | serial | Primary key |
| wallet_address | text | User wallet address (unique) |
| vault_contract_address | text | On-chain vault contract address |
| network_id | integer | Chain ID (default: 11155111 Sepolia) |
| created_at | timestamp | Record creation time |

### transactions

Stores off-chain records of shield, unshield, and transfer operations.

| Column | Type | Description |
|---|---|---|
| id | serial | Primary key |
| wallet_address | text | Initiating wallet address |
| tx_hash | text | On-chain transaction hash (unique) |
| type | text | Operation type: shield, unshield, or transfer |
| token_address | text | ERC-20 token contract address |
| token_symbol | text | Token symbol (e.g. USDT) |
| token_name | text | Token name (e.g. USD Tether) |
| amount | text | Amount as string to avoid precision loss |
| from_address | text | Sender address |
| to_address | text | Recipient address (nullable for unshield) |
| network_id | integer | Chain ID |
| created_at | timestamp | Record creation time |

## Setup

```bash
cp .env.example .env
npm install
npm run push
```

## Commands

```bash
# Push schema to database
npm run push

# Generate migration files
npm run generate
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg)](LICENSE)

Copyright (c) 2026 [wei-zuan](https://github.com/wei-zuan). See [LICENSE](LICENSE) for full terms.
