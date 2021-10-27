"""Initial data insert.

Revision ID: 04685a108fb3
Revises: 91d96819b956
Create Date: 2021-10-26 21:20:15.284068

"""
from sqlalchemy.sql import table, column
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = '04685a108fb3'
down_revision = '91d96819b956'
branch_labels = None
depends_on = None


def upgrade():

    # Insert test user.
    users_table = table('users',
        column('id', sa.Integer),
        column('username', sa.String),
        column('savings', sa.Integer)
    )
    op.bulk_insert(users_table, [
      {
        'id': 1,
        'username': 'Test',
        'savings': 0
      },
    ])

    # Bluk insert of stocks.
    stocks_table = table('stocks',
        column('id', sa.Integer),
        column('name', sa.String),
        column('current_price', sa.Integer)
    )
    op.bulk_insert(stocks_table, [
      {
        'id': 1,
        'name': 'Alibaba',
        'current_price': 10000
      },
      {
        'id': 2,
        'name': 'Apple Inc.',
        'current_price': 3500000
      },
      {
        'id': 3,
        'name': 'Contoso LTD.',
        'current_price': 200000
      },
      {
        'id': 4,
        'name': 'Lenovo',
        'current_price': 200000
      },
      {
        'id': 5,
        'name': 'Coca Cola',
        'current_price': 200000
      }
    ])


def downgrade():
    op.execute("DELETE FROM users;")
    op.execute("DELETE FROM stocks;")
