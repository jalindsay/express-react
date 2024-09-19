type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type Post = {
  id: string;
  title: string;
  price: number;
  description: string;
};

type Order = {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  total: number;
};
