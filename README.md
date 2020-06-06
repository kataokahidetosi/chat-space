#  README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups,through :groups_users
- has_many :posts
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer｜null: false｜
|name|string|null: false|
|user_id|integer|null: false foreign_key :true|
### Association
- has_many :user,through :groups_users
- has_many :posts
- has_many :groups_users


## postsテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: true|
|image|string|null: true|
|user_id|integer|null :false foreign_key :true|
|group_id|integer|null :false foreign_key :true|
### Association
- belong_to :user
- belongs_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|nul: false foreign_key :true|
|group_id|integer|null: false foreign_key :true|
### Association
- belongs_to :user
- belongs_to :group