var loopTimer = 2000;

var mca_number_list = new Array(1);
var mo_number_list = new Array(1);

//variable declaration
var textareaIn = document.createElement('textarea');
var textareaOut = document.createElement('textarea');
var btnClick = document.createElement('input');

btnClick.type = 'button'
btnClick.value = 'button'

textareaOut.cols = 50;
textareaIn.cols = 50;

textareaOut.rows = 10;
textareaIn.rows = 10;


function contact_extractor() {

    var parentContainer = document.getElementById('example-basic1');
    parentContainer.appendChild(textareaIn);
    parentContainer.appendChild(textareaOut);
    parentContainer.appendChild(btnClick);
    btnClick.addEventListener("click", clickEventRun);


    document.addEventListener("keydown", (e) => {
        if (e.key === "j") {
            var btn_alteraddr = document.getElementById("RadShipAddress_2");
            btn_alteraddr.click();
            var btn_downlineaddr = document.getElementById("RadShipAddress_1");
            btn_downlineaddr.click();
        } else if (e.key === "k") {
            var copyText = document.getElementById("ContentPlaceHolder1_txtMobile");

            var dummy = $("<textarea>").val(copyText.value).appendTo("body").select();
            document.execCommand("copy");
            $(dummy).remove();

            /*copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");*/
            alert(copyText.value);
        } else if (e.key === "l") {
            var copyText = document.getElementById("ContentPlaceHolder1_ddlCity");
            var text = copyText.options[copyText.selectedIndex].text;
            /*copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");*/
            var dummy = $("<textarea>").val(text).appendTo("body").select();
            document.execCommand("copy");
            $(dummy).remove();
            alert(text);
        }
    });



    //function declaration

    function clickEventRun() {
        var rawData = textareaIn.value;
        var lineCounts = rawData.split('\n');

        var title = document.getElementById('acollapse2')
        title.innerHTML = lineCounts.length + ' ' + 'Remaining';

        var mca_list = lineCounts;

        //clicking j
        var btn_alteraddr = document.getElementById("RadShipAddress_2");
        btn_alteraddr.click();
        var btn_downlineaddr = document.getElementById("RadShipAddress_1");
        btn_downlineaddr.click();

        var txt_mca_no = document.getElementById("ContentPlaceHolder1_TxtDownlineID");
        txt_mca_no.value = mca_list[0];
        txt_mca_no.focus();
        txt_mca_no.blur();

        var i = 1;                  //  set your counter to 1

        function myLoop() {
            //  create a loop function
            setTimeout(function () {   //  call a 3s setTimeout when the loop is called

                const element = mca_list[i];

                var copyText = document.getElementById("ContentPlaceHolder1_txtMobile");
                var dummy = $("<textarea>").val(copyText.value).appendTo("body").select();
                document.execCommand("copy");
                $(dummy).remove();

                textareaOut.value = textareaOut.value + "\n" + copyText.value;

                //clicking j
                var btn_alteraddr = document.getElementById("RadShipAddress_2");
                btn_alteraddr.click();
                var btn_downlineaddr = document.getElementById("RadShipAddress_1");
                btn_downlineaddr.click();

                var txt_mca_no = document.getElementById("ContentPlaceHolder1_TxtDownlineID");
                txt_mca_no.value = element;
                txt_mca_no.focus();
                txt_mca_no.blur();

                console.log('hello');   //  your code here
                i++;

                //  increment the counter
                if (i < mca_list.length) {           //  if the counter < 10, call the loop function
                    myLoop();             //  ..  again which will trigger another 
                }                       //  ..  setTimeout()

            }, loopTimer)
        }

        myLoop();


        /*for (let i = 0; i < mca_list.length; i++) {

            const element = mca_list[i];

            clickTimerCaller(element);

        }*/
    }

    //btnClick.onclick = clickEventRun;

}

setTimeout(contact_extractor, 5000);