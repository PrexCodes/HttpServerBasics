
import path from 'path'
import fsPromise from 'fs/promises'
let newPath = "C:/Users/Man Of God/Documents/BioTrace/DSA/ignore/index.js"
console.clear()
// console.log(path.basename(newPath))
// console.log(path.dirname(newPath))
// console.log(path.extname(newPath))
// console.log(path.join(__dirname, "ignore", "index.js"))

console.log(__dirname);

//FIle System

import fs from 'fs'
// import { log } from 'console';
// fs.readFileSync()
//normal read files
try {
    let data = fs.readFileSync(path.join(__dirname, 'ignore', 'index.js'), { encoding: "utf-8" })

    console.log(data);

} catch (error) {
    console.log(error);

}

const readFiles = async () => {
    try {
        const data = await fsPromise.readFile(
            path.join(__dirname, "ignore", "faith.js",),
            { encoding: "utf-8" }
        );
        console.log(data);
    } catch (error) {
        throw error
    }
};

//Callback Statement
// readFiles()
const myPath = path.join(__dirname, 'crud.ts')
fs.readFile(myPath, 'utf-8', (err, data)=>{
    if(err){
        return err
    }else{
        console.log(data)
    }
})

