class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :photo_id, null: false

      t.timestamps null: false
    end
    add_index :taggings, [:tag_id, :photo_id], unique: true
    add_index :taggings, :photo_id
  end
end
