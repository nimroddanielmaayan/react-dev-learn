import classes from './ProfileSection.module.css';

const user = {
  name: 'Nimrod Mayan',
  imageUrl:
    'https://www.mayandigital.co.il/wp-content/uploads/2020/05/28471606_1804404062913014_5803395802181140480_o1.jpg',
  imageSize: 90,
  isLoggedIn: true,
};

let sectionContent;

if (user.isLoggedIn) {
  sectionContent = (
    <>
      <h1>{'Current user: ' + user.name}</h1>
      <img
        className={classes.avatar}
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
} else {
  sectionContent = (
    <>
      <p>No user is logged in</p>
    </>
  );
}

function ProfileSection() {
  return <>{sectionContent}</>;
}

export default ProfileSection;
