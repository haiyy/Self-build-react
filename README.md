 智能广告投放系统   
 *  应用框架react,结合antd框架
 *  应用了代码拆分技术,动态import结合babel,实现了按需加载的效果,优化性能    
 * 代码  
  import("./math").then(math => {
  console.log(math.add(16, 26));
});