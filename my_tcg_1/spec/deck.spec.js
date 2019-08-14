describe("JSUtilities", function() {

  describe("Files Utils", function(){

    it("should have one class", function(){
      let directory = __dirname+"/../src/models";
      let filelist = walkSync(directory);
      filelist.forEach(function(name){
        console.log(name)
      });
    });

  });

});

var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};
