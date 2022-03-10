module.exports = {
  content: [
    './public/**/*.html',
    './public/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}



    // // create a async function
    // const start = async () => {

    //   // navigator api add
    //   const stream = await navigator.mediaDevices.getDisplayMedia(
    //     {
    //       // set a object. video stream
    //       video: {
    //         mediaSource: "screen",
    //       },
    //       audio: {
    //         mediaSource:"screen",
    //       }
    //     });
    //     const data=[];

    //   // this mediaRecorder can record our video and convert video to bynary object and store to the src.
    //   const mediaRecorder= new MediaRecorder(stream);

    //   mediaRecorder.ondataavailable = (e) => {
    //     data.push(e.data);
    //   };

    //   mediaRecorder.start();

    //   mediaRecorder.onstop = (e) => {
    //     document.querySelector("video").src = URL.createObjectURL(
    //       new Blob(data,{
    //         type: data[0].type,
    //       })
    //     );
    //   };
    // };
    // // call the start function here
    // start();