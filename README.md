#  README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :groups
- has_many :posts

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer｜null: false｜
|group_name|string|null: false|
|user_id|integer|null: false foreign_key|
### Association
- belongs_to :user
- has_many :posts


## postsテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|time|timestamp|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belong_to :user
- belongs_to :group

## groups_postsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|nul: false|
|group_id|integer|null: false|
### Association
- belongs_to :user
- belongs_to :group