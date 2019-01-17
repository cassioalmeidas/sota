class AddCiteprocToPapers < ActiveRecord::Migration[5.2]
  def change
    add_column :papers, :citeproc, :jsonb
  end
end
