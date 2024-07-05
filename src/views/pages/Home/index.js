import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import ShopRole from "./ShopRole";
import Trending from "./Trending";
import CustomerReviews from "./CustomerReviews";
import SummerCollection from "./SummerCollection";
import ReferFriend from "./ReferFriend";
import FashionStories from "./FashionStories";
import Appdownload from "./Appdownload";
import BudgetStore from "./BudgetStore"
import MostViewed from "./MostViewed"
function Home(props) {
  return (
    <Page title="IndoLab">
      <Box>
        <Banner />
     
        <ShopRole />
        <Trending />
        <Appdownload />
        <FashionStories />
        <SummerCollection />
        <ReferFriend />
        <BudgetStore/>
<MostViewed/>
        <CustomerReviews />
      </Box>
    </Page>
  );
}

export default Home;
