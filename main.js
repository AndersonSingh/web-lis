
function find_lis(){

	var nums_str = document.getElementById('sequence_box').value;

	var nums_temp = nums_str.split(',');

	/* do not want to use the zero index. */
	nums_temp.unshift(0);

	var len_nums = nums_temp.length;

	var output = "";

	var bad_input_flag = 0

	/* populate array storing length and extension of sequences. */
	var store_len = [];
	var store_ext = [];
	var nums = [];

	for(var i = 0; i < len_nums; i++){

		if(isNaN(parseInt(nums_temp[i]))){
			bad_input_flag = 1;
		}

		nums.push(parseInt(nums_temp[i]))
		store_len.push(1);
		store_ext.push(i);
	}

	if(bad_input_flag == 0){


		/* handles building the table for the user. */

		/* displays the indices of the array. */

		output += '<br>';

		output += '<h2>Table 1</h2>';

		output += '<table>';

		output += '<tr><td>Index</td>';

		for(var k = 1; k < len_nums; k++){
			output += '<td>' + k + '</td>';
		}

		output += '</tr>';

		/* displays the contents of the array. */
		output += '<tr><td>Array</td>';

		for(var k = 1; k < len_nums; k++){
			output += '<td>' + nums[k] + '</td>';
		}

		output += '</tr>';

		/* displays the length of the subsequences */
		output += '<tr><td>Length</td>';

		for(var k = 1; k < len_nums; k++){
			output += '<td>' + store_len[k] + '</td>';
		}

		output += '</tr>';

		/* displays the index that the current subsequence extends. */
		output += '<tr><td>Extend</td>';

		for(var k = 1; k < len_nums; k++){
			output += '<td>' + store_ext[k] + '</td>';
		}

		output += '</tr>';

		/* end table, and add spacing. */
		output += '</table>';

		output += '<br><br><br>';



	for(var i = 2; i < len_nums; i++){

		for(var j = 1; j < i; j++){
			if(nums[j] < nums[i] && store_len[i] < store_len[j] + 1){
				store_len[i] = store_len[j] + 1;
				store_ext[i] = j;
			}
		}

		/* handles building the table for the user. */
		output += '<h2>Table ' + i + '</h2>';

		/* displays the indices of the array. */
		output += '<table>';

		output += '<tr><td>Index</td>';

		for(var k = 1; k < len_nums; k++){
			output += '<td>' + k + '</td>';
		}

		output += '</tr>';

		/* displays the contents of the array. */
		output += '<tr><td>Array</td>';

		for(var k = 1; k < len_nums; k++){
			output += '<td>' + nums[k] + '</td>';
		}

		output += '</tr>';

		/* displays the length of the subsequences */
		output += '<tr><td>Length</td>';

		for(var k = 1; k < len_nums; k++){
			output += '<td>' + store_len[k] + '</td>';
		}

		output += '</tr>';

		/* displays the index that the current subsequence extends. */
		output += '<tr><td>Extend</td>';

		for(var k = 1; k < len_nums; k++){
			output += '<td>' + store_ext[k] + '</td>';
		}

		output += '</tr>';

		/* end table, and add spacing. */
		output += '</table>';

		output += '<br><br><br>';

	}


	/* find the max length */
	var max = -1;
	var max_idx = -1;

	for(var i = 1; i < len_nums; i++){
		if(store_len[i] > max){
			max = store_len[i];
			max_idx = i;
		}
	}

	output += '<h2>The LIS is ' + max + '</h2><br>';

	output += '<h2>The sequence is ';

	lis_seq = [];

	/* what is does the LIS consist of ? */
	while(store_ext[max_idx] != max_idx){
		lis_seq.unshift(nums[max_idx]);
		max_idx = store_ext[max_idx];
	}
	/* get the last one. */
	lis_seq.unshift(nums[max_idx]);

	for(var k = 0; k < lis_seq.length; k++){
		output += lis_seq[k] + ' ';
	}

	output += '</h2>';

	document.getElementById('table_output').innerHTML = output;
	}
	else{
		document.getElementById('table_output').innerHTML = '<br><h2>Bad Input</h2><br>';
	}
}