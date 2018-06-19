class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :author
      t.string :avatar
      t.text :comment
      t.string :date
      t.integer :likes

      t.timestamps
    end
  end
end
