import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  return (
  <>  
    <main>
      <MainHeader onCreatePost={handleModalOpen} />
      <PostsList isPosting={isModalOpen} onStopPosting={handleModalClose} />
    </main>
  </>
  ) 
}

export default App;