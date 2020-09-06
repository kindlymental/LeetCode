/**
120. 三角形最小路径和
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
例如，给定三角形：
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
说明：如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 */

/**
 * 动态规划-自底向上
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (var i = triangle.length - 2; i >= 0; i--) {
        for (var j = 0; j < triangle[i].length; j++) {
            triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
        }
    }
    return triangle[0][0];
};

/**
 * 动态规划-自底向上-降维
 * 空间复杂度：O(n)
 * 自底向上递归时，其实每次只会用到上一层数据，因此不需二维数组存储所有可能情况来一一比较
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    var dp = new Array(triangle.length + 1).fill(0);
    for (var i = triangle.length - 1; i >= 0; i--) {
        for (var j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};

/**
766. 托普利茨矩阵
如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵。给定一个 M x N 的矩阵，当且仅当它是托普利茨矩阵时返回 True。

输入: 
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
输出: True
说明:
matrix 是一个包含整数的二维数组。matrix 的行数和列数均在 [1, 20]范围内。matrix[i][j] 包含的整数在 [0, 99]范围内。
进阶:
如果矩阵存储在磁盘上，并且磁盘内存是有限的，因此一次最多只能将一行矩阵加载到内存中，该怎么办？
如果矩阵太大以至于只能一次将部分行加载到内存中，该怎么办？
 */

/**
 * 检查左上邻居
 * 对于对角线上的元素来说，如果当前元素不是第一个出现的元素，那么它前面的元素一定在当前元素的左上角。可以推出，
 * 对于位于坐标 (r, c) 上的元素，只需要检查 r == 0 OR c == 0 OR matrix[r-1][c-1] == matrix[r][c] 就可以了。
 * 时间复杂度: O(M*N)。 空间复杂度: O(1)。
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    if (matrix.length === 1 || matrix[0].length === 1) return true;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }
    return true;
};

/**
 * 962、最大宽度坡
 给定一个整数数组 A，坡是元组 (i, j)，其中  i < j 且 A[i] <= A[j]。这样的坡的宽度为 j - i。
 找出 A 中的坡的最大宽度，如果不存在，返回 0 。
    示例 1：
    输入：[6,0,8,2,1,5]  输出：4
    解释：最大宽度的坡为 (i, j) = (1, 5): A[1] = 0 且 A[5] = 5.
    示例 2：
    输入：[9,8,1,0,1,9,4,0,4,1]  输出：7
    解释：最大宽度的坡为 (i, j) = (2, 9): A[2] = 1 且 A[9] = 1.
 */

/* 单调栈中实际记录了，从后往前每个大分段“坡底”所在的序号。然后，从后往前取出每一个序号i，如果比栈顶序号j大，就说明从i到j这一整段满足“坡”的定义 A_j \le A_i(j < i)A 
j ≤A i (j<i) ，那就继续弹出栈顶，计算下段“坡”。因为我们是采用贪心的方法，从后面（最可能出现最长宽度的情况）往前计算，所以，某个元素i“战胜”的栈顶元素越多，它的宽度也就越宽，也就越可能是一个最大宽度坡。当然，i的序号应该比ans大，因为i比ans小不可能会出现比ans大的宽度坡了，所以可以提前结束循环。
*/
var maxWidthRamp = function(A) {
    let ws = [], ans = 0;
    for(let i=0; i < A.length; ++i) {
        if(!ws.length || A[ws[ws.length - 1]] > A[i]) {
           ws.push(i);
        }
    }
    for(let i=A.length - 1; i > ans; --i) {
        while(ws.length && A[ws[ws.length - 1]] <= A[i]) {
            ans = Math.max(ans, i - ws.pop());
        } 
    }
    return ans;
};
