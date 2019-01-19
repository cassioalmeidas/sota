class AddRejectedToPapers < ActiveRecord::Migration[5.2]
  def change
    add_column :papers, :rejected, :boolean, default: false, null: false
  end
end
