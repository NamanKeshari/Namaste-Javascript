// method -> obj
// function -> global (window in browser, global in nodejs)

const createVideo = function () {
  // factory function
  return {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach(function (tag) {
        console.log(this.title, tag);
      }, this);
    },
    play() {
      console.log(this);
    },
  };
};

const video = createVideo();

video.stop = function () {
  console.log(this);
};

function videoPlay() {
  console.log(this);
}

function Video(title) {
  // constructor function
  this.title = title;

  console.log(this);
}

const v = new Video("a"); // {}
const v1 = new Video("b");

video.showTags();
videoPlay();
