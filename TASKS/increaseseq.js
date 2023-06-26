function increasingSeq(dp, arr, n, m, x, y){
		if (dp[x][y] < 0) {
			let result = 0;
			if (x == n - 1 || y == m - 1)
				result = 1;
            if(x-1 >=0 && arr[x][y] <arr[x-1][y])
                result = 1+ increasingSeq(dp, arr, n,m,x-1,y);
            if(y-1 >=0 && arr[x][y] <arr[x][y-1])
                result = 1+ increasingSeq(dp, arr, n,m,x,y-1);
			if (x + 1 < n && arr[x][y] < arr[x + 1][y])
				result = 1 + increasingSeq(dp, arr, n, m, x + 1, y);
			if (y + 1 < m && arr[x][y] < arr[x][y + 1])
				result = Math.max(result, 1 + increasingSeq(dp, arr, n, m, x, y + 1));

			dp[x][y] = result;
		}
		return dp[x][y];
	}
	function wrapper(arr, n, m){
		let dp = [];
		for (let i = 0; i < n; i++)
		{
			dp[i] = new Array(n);
			for (let j = 0; j < n; j++)
			{
				dp[i][j] = -1;
			}
		}
		return increasingSeq(dp, arr, n, m, 0, 0);
	}
	let arr= [
        [1,2,3,4],
        [3,1,2,5],
        [9,7,4,6],
        [2,5,1,2]
    ];
	let n = arr.length, m = arr[0].length;
	console.log(wrapper(arr,n,m));
	
