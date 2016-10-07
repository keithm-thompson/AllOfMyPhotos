class AddTitlesToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :title, :string, null: false
  end
end
