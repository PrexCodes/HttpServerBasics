import fs from "fs";
import path from "path";


let datas = path.join(__dirname, "sample", "index.js")

//create
 
    function create(value: string){
        fs.writeFile(
            datas,
            value,
            (err)=>{
                if(err){
                    throw err
                }else{
                    console.log('Created successfully')
                }
            }
        )
    }
//remove
    function read(){
        fs.readFile(datas, 'utf-8', (err, data)=>{
            if(err){
                throw err
            }else{
                console.log(data)
            }
        })
    }


    const readWrite = (message: string, ext)=>{
        fs.writeFile(path.join(__dirname, 'sample', ext), message,
        
        (err)=>{
            if(err){
                throw err
            }else{
                console.log('Done....')
                fs.readFile(path.join(__dirname, 'sample', ext), 'utf-8', (err, data)=>{
                    if(err){
                        throw err
                    }else{
                        console.log(data)
                    }
                })
            }
        })
    }


// readWrite('There is a hill farr away', 'files.txt')
// readWrite('There is a hill farr away', 'travis.txt')
// fs.writeFile(
//     datas,
//     `console.log('Precious'); \nconsole.log('Don')`,
//     (err) => {
//         if (err) {
//             throw err
//         } else {
//             console.log("I don finish");
            

//         }
//     })


//Update
fs.appendFile(path.join(__dirname, 'sample', 'data.txt'), '\nWelcome to Codelab', (err)=>{
    if(err){
        throw err
    }else{
        console.log("Done");
        
    }
})

//delete
fs.unlink(path.join(__dirname, 'sample', 'data.txt'), (err)=>{
    if(err){
        throw err
    }else{
        console.log("Done");
        
    }
})
