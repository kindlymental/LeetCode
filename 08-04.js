/**
 121. 买卖股票的最佳时机
 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 注意：你不能在买入股票前卖出股票。
 示例 1:
 输入: [7,1,5,3,6,4]  输出: 5
 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 示例 2:
 输入: [7,6,4,3,1]  输出: 0
 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

 /**
  * 双重for循环遍历
  * 时间复杂度：O(n^2)   空间复杂度：O(1)，只使用了常数个变量。
  * @param {number[]} prices
  * @return {number}
  */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let diff = 0;
    for (let i=0; i<prices.length; i++) {
        var pri = prices[i];
        for (let j=i+1; j<prices.length; j++) {
            // 计算差值
            if (prices[j] - pri > diff) {
                diff = prices[j] - pri;
            }
        }
    }
    return diff;
};

/**
 * 贪心算法 （记录历史最低点，只遍历一次）
 * 时间复杂度：O(n)。  空间复杂度：O(1)。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let minPirce = prices[0];
    let maxProfit = 0;
    for (let i=0; i<prices.length; i++) {
        if (prices[i] < minPirce) {
            minPirce = prices[i];
        } else if (prices[i] - minPirce > maxProfit) {
            maxProfit = prices[i] - minPirce;
        }
    }
    return maxProfit;
};

/**
 * 118、杨辉三角
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 示例:
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

/**
 * 动态规划  时间复杂度：O(n^2)   空间复杂度：O(n^2)
 *  双层循环，外层循环的索引位置，影响内层循环遍历的次数；
    外层循环插入数组，内层循环插入数字
    内层循环开始和结束位置都是插入数字 1
    内层循环其他位置插入的数字，由上一行数组中的数字计算决定
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    for(let i = 0; i < numRows; i++){
        let row = [];
        row[0] = 1;
        row[i] = 1;
        if(i > 1){
            for(let j = 1; j < i; j++){
                row[j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
        res.push(row);
    }
    return res;
};

/**
 122. 买卖股票的最佳时机 II
 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
 示例 1:
 输入: [7,1,5,3,6,4]   输出: 7
 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 示例 2:
 输入: [1,2,3,4,5]  输出: 4
 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 示例 3:
 输入: [7,6,4,3,1]  输出: 0
 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

 提示：
 1 <= prices.length <= 3 * 10 ^ 4    
 0 <= prices[i] <= 10 ^ 4
 */

/**
 * 贪心算法
 * 贪心算法：在对问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优上加以考虑，他所做出的是在某种意义上的局部最优解。
   此题中：1、不考虑其他时间段对当前所造成的影响，仅考虑当下所能获得的最大收益; 2、prices[i] - prices[i - 1]差值为正数即为收益
   时间复杂度：O(n)，遍历一次。
   空间复杂度：O(1)，需要常量的空间。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0
    for(let i=1; i<prices.length; i++) {
        sum += Math.max(prices[i] - prices[i-1], 0)
    }
    return sum
};

/**
 * 349、两个数组的交集
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 示例 1：输入：nums1 = [1,2,2,1], nums2 = [2,2]  输出：[2]
 * 示例 2：输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]  输出：[9,4]
 * 说明：输出结果中的每个元素一定是唯一的。我们可以不考虑输出结果的顺序。
 */
/**
 * 库函数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return [...new Set(nums1.filter((item) => {
        return nums2.includes(item)
    }))]
};

console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))

// 解法四：排序 + 双指针
// 时间复杂度：O(nlogn)   

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = nums1.sort((a,b) => a - b);
    nums2 = nums2.sort((a,b) => a - b);
    let i = 0;
    let j = 0;
    let res = new Set();
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++;
        }else if(nums1[i] > nums2[j]){
            j++;
        }
        else{
            res.add(nums1[i]);
            i++;
            j++;
        }
    }
    return [...res];
};

// 解法五：二分查找
// 时间复杂度：O(nlogn)
// 参考各类算法模板 - 二分查找   88ms  27.8MB

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = new Set();
    nums2 = nums2.sort((a,b) => a - b);
    let binarySearch = (arr,val) => {
        let left = 0;
        let right = arr.length - 1;
        while(left <= right){
            let mid = (left + right) >> 1;
            if(arr[mid] === val){
                return true;
            }else if(arr[mid] > val){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return false;
    }
    for(let i = 0;i < nums1.length;i++){
        if(binarySearch(nums2,nums1[i])){
            res.add(nums1[i]);
        }
    }
    return [...res];
};