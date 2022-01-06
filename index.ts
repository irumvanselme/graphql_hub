import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./src/models/User";

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Rca@{123}",
    database: "typeorm",
    entities: [User],
    synchronize: true,
    logging: false,
}).then(async (connection) => {
    let userRepo = connection.getRepository(User);

    let newUser = new User(12, "emmanuel");
    newUser.lastName = "claude";

    await userRepo.save(newUser);

    let users: Array<User> = await userRepo.find();

    console.log(users[0].role);
});
