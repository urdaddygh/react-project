import {Box, Button} from "rebass/styled-components"
import { Label, input } from "@rebass/forms"
import { useForm } from "react-hook-form"
import Loader from "react-loader-spinner"

export const BookForm = ({defaultValues, onFormSubmit, isLoading}) =>{
    const {register, handleSubmit} = useForm({defaultValues})

    const onSubmit = handleSubmit((data )=>{
        onFormSubmit( data)
    })
    return(
        <form onSubmit={onSubmit}>
            <Box>
                <label htmlFor="title">Title</label>
                <input ref={register} id="title" name="title" type="text"/>
            </Box>
            <Box>
                <label htmlFor="author">Author</label>
                <input ref={register} id="author" name="author" type="text"/>
            </Box>
            <Button>
                {isLoading ? (<Loader type="ThreeDots" color="#fff" height={10}/>): ("Submit")}
            </Button>
        </form>
    )
}