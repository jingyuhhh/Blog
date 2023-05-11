import "./Passage.css";
import imgURL from "./psg1.png";

function Article() {
  return (
    <div className="article-container">
      <div className="article-main">
        <div className="article-main-word">
          <div className="article-main-title">无题</div>
          <div className="article-main-body">
            不得不感慨一句，现在的孩子压力太大了（虽然我也年纪不大hhh）
            最近总是在安慰人：雅礼的学妹给我打来第四次（还是第三次，不记得了）电话，说自己感觉睡得比其他同学都多（7.5h）但是上课还是困，所以感到焦虑，仔细问才知道原来是老师讲得太无聊了实在提不起精神；
            仍然是高三的学弟，周末为了让自己不玩手机把手机交给爸妈但是仍然提不起劲搞学习，睡了一天，于是感到非常焦虑；
            一个四年级的小朋友，单词死都记不住被老师骂哭了，被要求听写出来才能回家，半个小时里边哭边记，我说要不你回去记记，今天就算了，但她硬是留了下来听写完（虽然最后还是错的很多）……
            只是觉得很悲哀，好像玩变成了一种luxury……
            最近我做出来退出无人机团队的决定，也就意味着我不打算再参加无人机相关的竞赛。没错，这类竞赛确实比较水，相比算法竞赛来说更容易拿到加分，这样在保研上就会有优势。
            刚接触的时候确实觉得还挺有意思，然而我发现我对它已经丧失了兴趣。它对我来说已经变成了加分的工具。
            我希望我可以做自己喜欢的事，希望我的生活里少一点不得不和自己逼自己。
            这个学期，我决定冲一冲算法竞赛，冲一冲pivot studio的前端部门。
            前端方面的就业必然没有后端好，但决定冲前端而不是后端，仅仅因为目前来说更喜欢前端。
          </div>
        </div>
        <img src={imgURL} alt="文章配图" className="article-main-img"></img>
      </div>
      <div className="article-container-bottom">
        <div className="article-container-bottom-left">
          <div className="article-container-tag">生活杂谈</div>
          <div className="article-container-time">2023-5-11</div>
        </div>
        <div className="article-container-bottom-right"></div>
      </div>
    </div>
  );
}

export default Article;
