
/**
 * 486、预测赢家
 * 给定一个表示分数的非负整数数组。 玩家 1 从数组任意一端拿取一个分数，随后玩家 2 继续从剩余数组任意一端拿取分数，然后玩家 1 拿，…… 。
 * 每次一个玩家只能拿取一个分数，分数被拿取之后不再可取。直到没有剩余分数可取时游戏结束。最终获得分数总和最多的玩家获胜。
 * 给定一个表示分数的数组，预测玩家1是否会成为赢家。你可以假设每个玩家的玩法都会使他的分数最大化。
    示例1：输入：[1, 5, 2]
    输出：False
    解释：一开始，玩家1可以从1和2中进行选择。如果他选择 2（或者 1 ），那么玩家 2 可以从 1（或者 2 ）和 5 中进行选择。如果玩家 2 选择了 5 ，那么玩家 1 则只剩下 1（或者 2 ）可选。
    所以，玩家 1 的最终分数为 1 + 2 = 3，而玩家 2 为 5 。因此，玩家 1 永远不会成为赢家，返回 False 。
    示例2：输入：[1, 5, 233, 7]
    输出：True
    解释：玩家 1 一开始选择 1 。然后玩家 2 必须从 5 和 7 中进行选择。无论玩家 2 选择了哪个，玩家 1 都可以选择 233 。最终，玩家 1（234 分）比玩家 2（12 分）获得更多的分数，所以返回 True，表示玩家 1 可以成为赢家。
 */
const PredictTheWinner = (nums) => {
    const len = nums.length;
  
    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
      dp[i] = new Array(len);
    }
    
    for (let i = 0; i < len; i++) { 
      dp[i][i] = nums[i];
    }
    
    for (let i = len - 2; i >= 0; i--) { 
      for (let j = i + 1; j < len; j++) {
        const pickI = nums[i] - dp[i + 1][j];
        const pickJ = nums[j] - dp[i][j - 1];
        dp[i][j] = Math.max(pickI, pickJ);
      }
    }
  
    return dp[0][len - 1] >= 0;
  };
  


/**
 * 846、一手顺子
 爱丽丝有一手（hand）由整数数组给定的牌。现在她想把牌重新排列成组，使得每个组的大小都是 W，且由 W 张连续的牌组成。
 如果她可以完成分组就返回 true，否则返回 false。
   示例 1：
   输入：hand = [1,2,3,6,2,3,4,7,8], W = 3
   输出：true
   解释：爱丽丝的手牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
   示例 2：
   输入：hand = [1,2,3,4,5], W = 4
   输出：false
   解释：爱丽丝的手牌无法被重新排列成几个大小为 4 的组。
 */


/**
 * 443、压缩字符串  进阶：你能否仅使用O(1) 空间解决问题？
 给定一组字符，使用原地算法将其压缩。压缩后的长度必须始终小于或等于原数组长度。
 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。在完成原地修改输入数组后，返回数组的新长度。
  输入：["a","b","b","b","b","b","b","b","b","b","b","b","b"]
  输出：返回 4 ，输入数组的前4个字符应该是：["a","b","1","2"]。

  输入：["a","a","b","b","c","c","c"]
  输出：返回 6 ，输入数组的前 6 个字符应该是：["a","2","b","2","c","3"]
  说明："aa" 被 "a2" 替代。"bb" 被 "b2" 替代。"ccc" 被 "c3" 替代。
 */


