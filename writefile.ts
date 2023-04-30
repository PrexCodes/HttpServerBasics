
import fs from "fs";
import path from "path";
import fsPromise from 'fs/promises'

//file system 
//CRUD = Create, Read, Update and Delete
//sychronous, async await and the callback 

let datas = path.join(__dirname, "sample", "index.js")


    //create 
//     function create(value: string){
//         fs.writeFile(
//             datas,
//             value,
//             (err)=>{
//                 if(err){
//                     throw err
//                 }else{
//                     console.log('Created successfully')
//                 }
//             }
//         )
//     }
//     create('console.log(2)')
// //     // create('Precious')
// //     //remove
//     function read(){
//         fs.readFile(datas, 'utf-8', (err, data)=>{
//             if(err){
//                 throw err
//             }else{
//                 console.log(data)
//             }
//         })
//     }
//     read()


// //     const readWrite = (message: string, ext)=>{
// //         fs.writeFile(path.join(__dirname, 'sample', ext), message,
        
// //         (err)=>{
// //             if(err){
// //                 throw err
// //             }else{
// //                 console.log('Done....')
// //                 fs.readFile(path.join(__dirname, 'sample', ext), 'utf-8', (err, data)=>{
// //                     if(err){
// //                         throw err
// //                     }else{
// //                         console.log(data)
// //                     }
// //                 })
// //             }
// //         })
// //     }


// // Update
// fs.appendFile(datas, '\n \\\Welcome to Codelab', (err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("Done");
        
//     }
// })

// // delete
// fs.unlink(datas, (err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("Done");
        
//     }
// })




const newTestFunction = async(message: string, ext: string, newmessage?)=>{
    try {
        const data = await fsPromise.writeFile(path.join(__dirname, 'assign', ext), 
        message)
        console.log('Successfully')

        const read = await fsPromise.readFile(path.join(__dirname, 'assign', ext), 'utf-8')
        console.log(read)

        const update = await fsPromise.appendFile(path.join(__dirname, 'assign', ext), (newmessage ? ('\n'+newmessage) : ''))
        console.log("Updated", newmessage, 'successfully')

        // const remove = await fsPromise.unlink(path.join(__dirname, 'assign', ext))
        // console.log('Removed Succesfully')

    } catch (error) {
        console.log(error)
    }
}
// newTestFunction('I am Precious', 'codelab.txt', 'Updatable')

const readBroCodesSync = (ext: string, message?: string, newM?: string)=>{
    const myPath = path.join(__dirname, 'assign', ext)

    try {
        const writesync = fs.writeFileSync(myPath, (message ? message : ''))
        console.log('Written', 'Successfully')

        const readsync = fs.readFileSync(myPath, 'utf-8')
        console.log(readsync)

        const updateSync = fs.appendFileSync(myPath, (newM ? ('\n'+newM) : ''))
        console.log('UPDATED SUCCESSFULLY');

        const deleteSync = fs.unlinkSync(myPath)
        console.log('Consider your file gone');
        
        

    } catch (error) {
        console.log(error);
        
    }


}

readBroCodesSync('marvel.txt', 'Precious', 'Akogun')

// // 0806-174-9967