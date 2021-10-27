"""Initial tables creation (User, Stock and Stocks by User table).

Revision ID: 91d96819b956
Revises:
Create Date: 2021-10-26 19:35:16.685628

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '91d96819b956'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
      'users',
      sa.Column('id', sa.Integer, primary_key=True, nullable=False),
      sa.Column('username', sa.Unicode(100), nullable=False),
      sa.Column('savings', sa.Integer, nullable=False, server_default='0')
    )

    op.create_table(
      'stocks',
      sa.Column('id', sa.Integer, primary_key=True, nullable=False),
      sa.Column('name', sa.Unicode(100), nullable=False),
      sa.Column('current_price', sa.Integer, nullable=False)
    )

    op.create_table(
      'user_stocks',
      sa.Column('id', sa.Integer, primary_key=True, nullable=False),
      sa.Column('user_id', sa.Integer, sa.ForeignKey('users.id'), nullable=False),
      sa.Column('stock_id', sa.Integer, sa.ForeignKey('stocks.id'), nullable=False),
      sa.Column('quantity', sa.Integer, nullable=False)
    )

def downgrade():
    op.drop_table('user_stocks')
    op.drop_table('stocks')
    op.drop_table('users')
