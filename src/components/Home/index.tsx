import { useSwipeable } from "react-swipeable";
import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const {
    mobileNavBarIsExpanded,
    mobileAsideIsExpanded,
    toggleNavBar,
    toggleAside,
  } = useAppContext();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (toggleNavBar && toggleAside) {
        mobileAsideIsExpanded ? toggleAside() : toggleNavBar();
      }
    },
    onSwipedLeft: () => {
      if (toggleNavBar && toggleAside) {
        mobileNavBarIsExpanded ? toggleNavBar() : toggleAside();
      }
    },
  });

  return (
    <div
      className={`mt-24 flex w-full shrink-0 flex-col gap-4 p-12 transition-all
      ${mobileAsideIsExpanded && "ml-[-20rem] lg:ml-0"} lg:shrink`}
      {...handlers}
    >
      <h1 className="text-center text-extraLarge font-bold">
        The App User Guide
      </h1>
      <h2 className="text-large font-bold">The Header</h2>
      <ul className="ml-12 list-disc">
        <li>
          Important: You can always return to this page via clicking on the App
          title in the Header.
        </li>
        <li>
          The hamburger icon on the left toggles the navigation bar. On mobile,
          you can also swipe right to open the navigation bar, and swipe left to
          close it.
        </li>
        <li>
          The 3-dots icon on the right toggles the aside bar. On mobile, you can
          also swipe left to open the aside bar, and swipe right to close it.
        </li>
      </ul>
      <h2 className="text-large font-bold">The Navigation Bar</h2>
      <ul className="ml-12 list-disc">
        <li>
          The toggle button on the top toggles between direct message rooms and
          group rooms.
        </li>
        <li>
          The search input field filters the rooms with the query. You can
          search user/group names and IDs.
        </li>
        <li>
          The rooms are listed in the order of the date of the last sent
          message.
        </li>
        <li>
          You can edit your picture, name, note, and preferred theme via the
          settings button (the one with the gear icon). You can also logout
          through here.
        </li>
        <li>You can copy your ID by clicking on your profile button.</li>
      </ul>
      <h2 className="text-large font-bold">The Aside Bar</h2>
      <div className="ml-6 flex list-disc flex-col gap-2">
        <h3 className="text-large">Group Rooms</h3>
        <ul className="ml-6 list-disc">
          <li>Displays the group picture, name, ID, and members.</li>
          <li>You can filter group members through a search input query.</li>
          <li>
            You can leave the group by clicking on the &#34;Leave Group&#34;
            button.
          </li>
        </ul>
        <h3 className="text-large">Direct Rooms</h3>
        <ul className="ml-6 list-disc">
          <li>Displays the user&#39;s picture, name, ID, and mutual groups.</li>
          <li>You can filter mutual groups through a search input query.</li>
          <li>
            You can block the user by clicking on the the &#34;Block User&#34;
            button.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
