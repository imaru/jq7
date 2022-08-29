Qualtrics.SurveyEngine.addOnload(function()
{
     /*Place your JavaScript here to run when the page is fully displayed*/
     var qthis = this;
     qthis.hideNextButton();
 
     var task_github = "https://imaru.github.io/jq7/"; 
     // https://<GitHubのユーザー名>.github.io/<レポジトリ名>/
 
     var requiredResources = [
        "https://unpkg.com/jspsych@7.3.0",
        "https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.1",
        "https://unpkg.com/@jspsych/plugin-image-keyboard-response@1.1.1",
        "https://unpkg.com/@jspsych/plugin-preload@1.1.1",
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