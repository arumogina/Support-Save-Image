require "fileutils"

dirs = []
dirs.push(File.expand_path("../../src",__FILE__));
#dirs.push(File.expand_path("../../image",__FILE__));
dirs.push(File.expand_path("../../vendor",__FILE__));

files = []
files.push(File.expand_path("../../manifest.json",__FILE__));

target = File.expand_path("../../dist/sage_image",__FILE__);

FileUtils.mkdir_p(target);

dirs.each do |d|
  system("cp -r #{d} #{target}")
end

files.each do |f|
  system("cp #{f} #{target}")
end

Dir.chdir(File.expand_path("../../dist",__FILE__)) do
  system("zip -ruv save_image.zip sage_image");
end
