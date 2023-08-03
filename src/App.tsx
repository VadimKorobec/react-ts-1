import { Card, CardVariant } from "./components/Card";
import { UserList } from "./components/UserList";

export const App = () => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
      },
    },
  ];
  return (
    <>
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.primary}
        onClick={(num: number) => console.log("click", num)}
      >
        <button>Push Me</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quia
          neque vitae labore eos at culpa, voluptate blanditiis accusamus atque
          enim soluta ea quod aperiam odio ducimus consectetur. Aut, hic?
        </p>
      </Card>
      <UserList users={users} />
    </>
  );
};
