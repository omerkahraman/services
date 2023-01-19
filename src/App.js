import { useEffect } from "react";
import { PostService, UserService } from "./services";

function App() {

  useEffect(() => {
    PostService.getPosts().then(res => console.log(res))
    PostService.getPostDetail(3).then(res => console.log(res))
    PostService.newPost({
      userId: 4,
      title: 'Instance Title',
      body: 'Instance Body'
    }).then(res => console.log(res))

    UserService.getUsers();
  })

  return (
    <div className="App">
      APP
    </div>
  );
}

export default App;
