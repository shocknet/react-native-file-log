
Pod::Spec.new do |s|
  s.name         = "react-native-file-log"
  s.version      = "1.0.0"
  s.summary      = "react-native-file-log"
  s.description  = <<-DESC
                    react-native-file-log
                   DESC
  s.homepage     = "https://github.com/Emad-Salah/react-native-file-log"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "emads14@gmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/react-native-file-log.git", :tag => "master" }
  s.source_files  = "ios/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
end

  