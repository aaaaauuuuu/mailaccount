// inputのvalueの変数
let baito1 = 1;
let baito1_count = 0;
let baito2 = 2;
let baito2_count = 0;
let baito3 = 3;
let baito3_count = 0;

let partTime1_money = $('#money').val();
let partTime1_time = $('#time').val();
let partTime1_total_value = partTime1_money * partTime1_time;
let Yen1_resultValue = $('#Yen1_result').val();
let total_partTime1 = 0;

let partTime2_money = $('#money').val();
let partTime2_time = $('#time').val();
let partTime2_total_value = partTime2_money * partTime2_time;
let total_partTime2 = 0;


let partTime3_money = $('#money').val();
let partTime3_time = $('#time').val();
let partTime3_total_value = partTime3_money * partTime3_time;
let total_partTime3 = 0;

// 合計の変数
let Total_result = 0;

// // 再計算の変数
// let Yen_result = 0;

let total_recal1_3 = 0;



// 登録ボタンを押した時のイベント
$(function(){
    $('#check1').on('click',function(){
        console.log("OK");
        // お給料（1day）の値の変数
        let partTime1_money = $('#money1').val();
        let partTime1_time = $('#time1').val();
        let partTime1_total_value = partTime1_money * partTime1_time;
        $('.input_partTime1').text(partTime1_total_value);


    })
    $('#check2').on('click',function(){
        console.log("OK");
        let partTime2_money = $('#money2').val();
        let partTime2_time = $('#time2').val();
        let partTime2_total_value = partTime2_money * partTime2_time;
        $('.input_partTime2').text(partTime2_total_value);
    })

    $('#check3').on('click',function(){
        console.log("OK");
        let partTime3_money = $('#money3').val();
        let partTime3_time = $('#time3').val();
        let partTime3_total_value = partTime3_money * partTime3_time;
        $('.input_partTime3').text(partTime3_total_value);

    })

    

    // 出勤ボタンを押した時のイベント
    $('#btn').on('click', function(){
        console.log('hello World');
        let inputValue = $('#date').val();

        if(inputValue == 1) {
            for(let i = 1; i < 31; i++){
                baito1_count += parseFloat(i);
                $('.partTime1_result').html(baito1_count);
                
                if(partTime1_total_value != '') {
                    let partTime1_money = $('#money1').val();
                    let partTime1_time = $('#time1').val();
                    let partTime1_total_value = partTime1_money * partTime1_time;
                    $('#Yen1_result').text(partTime1_total_value);


                    let Yen1_resultValue = $('#Yen1_result').val();
                    total_partTime1 += parseFloat(Yen1_resultValue + partTime1_total_value);
                    $('#Yen1_result').text(total_partTime1);

                    $('#money1').val('');
                    $('#time1').val('');
                    

                } 

                let baitoName1_val = $('.baitoName1').val();
                $('.baito1').text(baitoName1_val + ': ');
                
                $('.input_partTime1').val('');
    
                return i;
            }

            
            
    
        } else if(inputValue == 2) {
            for(let i = 1; i < 31; i++){
                baito2_count += parseFloat(i);
                $('.partTime2_result').html(baito2_count);

                if(partTime2_total_value != '') {
                    let partTime2_money = $('#money2').val();
                    let partTime2_time = $('#time2').val();
                    let partTime2_total_value = partTime2_money * partTime2_time;
                    $('#Yen2_result').text(partTime2_total_value);  


                    let Yen2_resultValue = $('#Yen2_result').val();
                    total_partTime2 += parseFloat(Yen2_resultValue + partTime2_total_value);
                    $('#Yen2_result').text(total_partTime2);

                    $('#money2').val('');
                    $('#time2').val('');
                }

                let baitoName2_val = $('.baitoName2').val();
                $('.baito2').text(baitoName2_val + ': ');

                $('.input_partTime2').val('');

                return i;
            }
        } else if(inputValue == 3){
            for(let i = 1; i < 31; i++){
                baito3_count += parseFloat(i);
                $('.partTime3_result').html(baito3_count);

                if(partTime3_total_value != '') {
                    let partTime3_money = $('#money3').val();
                    let partTime3_time = $('#time3').val();
                    let partTime3_total_value = partTime3_money * partTime3_time;
                    $('#Yen3_result').text(partTime3_total_value);  

                    let Yen3_resultValue = $('#Yen3_result').val();
                    total_partTime3 += parseFloat(Yen3_resultValue + partTime3_total_value);
                    $('#Yen3_result').text(total_partTime3);

                    $('#money3').val('');
                    $('#time3').val('');


                }

                let baitoName3_val = $('.baitoName3').val();
                $('.baito3').text(baitoName3_val + ': ');

                $('.input_partTime3').val('');
                
                return i;
            }

        }

        $('#date').val('');

    })


    // 合計ボタンを押した時のイベント
    $('#total_btn').on('click', function(){


            if(total_partTime1 != '' && total_partTime2 != '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 == '' && total_partTime2 != '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 == '' && total_partTime2 == '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 == '' && total_partTime2 == '' && total_partTime3 == ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 != '' && total_partTime2 == '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 != '' && total_partTime2 != '' && total_partTime3 != ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result);

            } else if(total_partTime1 == '' && total_partTime2 != '' && total_partTime3 == ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result); 

            } else if(total_partTime1 != '' && total_partTime2 == '' && total_partTime3 == ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result); 

            } else if(total_partTime1 != '' && total_partTime2 != '' && total_partTime3 == ''){
                let total_partTime1_3 = total_partTime1 + total_partTime2 + total_partTime3;
                Total_result += parseFloat(total_partTime1_3);
                $('#total').html(Total_result); 
            }

            

    });

    // リセットボタンを押した時のイベント
    $('#reset_btn').on('click',function(){
        console.log('reset');
        if(Total_result != ''){
                $('#total').fadeOut('slow'); 
                
        }

        $('#reset_btn').fadeOut('slow');
        $('#total_btn').fadeOut('slow',function(){
            $('#total_btn').remove(); 
        });
        $('#recal_btn').fadeIn('2000');

    });

    // 再計算ボタンを押した時のイベント
    $('#total').on('change', function(){
        console.log('recal');

        $('#reset_btn').fadeIn();

        
        if(total_val != Yen_result){
            let total_val = $('#total').val();
            total_val.on('change', function(){
                $('#total').fadeIn('slow'); 
            });
            
            // let Yen_result = Yen1_resultValue + Yen2_resultValue + Yen3_resultValue;
            // total_recal1_3 += parseFloat(Yen_result);
            // $('#total').fadeIn('slow');
        } 


        
    })
});

