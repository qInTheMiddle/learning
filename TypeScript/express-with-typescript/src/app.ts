// "dev": "ts-node-dev --respawn src/app.ts" was added to package.json under "script" object
// to allow us to use npm run dev 
// also npm install --save-dev typescript @types/node @types/express so that we make
// are not only installing library but also installing types attached to it???
// and add another "build": "tsc -p ." to "script" in package.json file then run
// to turn .ts file to .js file 
// through dvelopmenet we keep running npm run dev
import express, {Request, Response} from "express";

const app = express();



app.get("/", (req: Request, res: Response) => {
    const x = req.query;
    res.send(x);
});

app.listen(5000, () => console.log("Server running"));

console.log("hello")
// so apparantly this is better than js because when we put wrong names
// or forget spelling we find out immedialtly instead having to try in
// console or maybe find out after long time 