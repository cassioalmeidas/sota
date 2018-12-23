class FileResourceUploader < Shrine
  ALLOWED_TYPES = %w[text/x-bibtex]
  MAX_SIZE      = 10*1024*1024 # 10 MB

  plugin :remove_attachment
  plugin :pretty_location
  plugin :versions
  plugin :validation_helpers

  Attacher.validate do
    validate_max_size MAX_SIZE
  end
end