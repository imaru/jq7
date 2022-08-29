Qualtrics.SurveyEngine.addOnload(function()
{
     /*Place your JavaScript here to run when the page is fully displayed*/
     var qthis = this;
     qthis.hideNextButton();
 
     var task_github = "https://imaru.github.io/jq7/"; 
     // https://<GitHubのユーザー名>.github.io/<レポジトリ名>/
 
     var requiredResources = [
        task_github+"jspsych/dist/jspsych.js",
        task_github+"jspsych/dist/plugin-html-keyboard-response.js",
        task_github+"jspsych/dist/plugin-image-keyboard-response.js",
        task_github+"jspsych/dist/plugin-preload.js",
        task_github + "main.js"
     ];
 
     function loadScript(idx) {
         console.log("Loading ", requiredResources[idx]);
         jQuery.getScript(requiredResources[idx], function () {
             if ((idx + 1) < requiredResources.length) {
                 loadScript(idx + 1);
             } else {
                 initExp();
             }
         });
     }
 
     if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
         loadScript(0);
     }
 
     jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
     jQuery("<div id = 'display_stage'></div>").appendTo('body');
     
    /* initialize jsPsych */
    var jsPsych = initJsPsych({
        on_finish: function () {
          jsPsych.data.displayData();
        }
      });
});

Qualtrics.SurveyEngine.addOnReady(function()
{
    /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
    /*Place your JavaScript here to run when the page is unloaded*/

});