let nums1 = [1,3], nums2 = [2];

let findMedianSortedArrays = function(nums1, nums2) {
    let mergeArr = (nums1.concat(nums2)).sort((a,b)=>a-b);
    let median,median1,median2;
    let out;
    if(mergeArr.length==1){
        median = mergeArr[0];
    }
    else if(mergeArr.length%2!=0){
        median = mergeArr[Math.floor(mergeArr.length/2)];
    }else{
        median1 = mergeArr[(mergeArr.length/2)-1]
        median2 = mergeArr[(mergeArr.length/2)];
        median = (median1+median2)/2;
    }
    return median.toFixed(5);
};

//output: 2.00000

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000

//Input: nums1=[3] , nums2=[-2,-1];
//output: -1