class FileResource < ApplicationRecord
  include FileResourceUploader::Attachment.new(:file)
  belongs_to :research
  validates :file, presence: true
end
