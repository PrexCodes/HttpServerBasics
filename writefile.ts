import fs from "fs";
import path from "path";


let datas = path.join(__dirname, "sample", "index.js")


 
    function create(value){
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

    function read(){
        fs.readFile(datas, 'utf-8', (err, data)=>{
            if(err){
                throw err
            }else{
                console.log(data)
            }
        })
    }

    create("console.log('Peter')")
    read()



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

