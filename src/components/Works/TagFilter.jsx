import { Box, Chip, Stack } from '@mui/material'
import { useEffect, useState } from 'react'

const TagFilter = ({ objectArr, setFilteredObjArr }) => {
    let initTags = new Set(['All'])
    objectArr.forEach((pr) => { pr.tags.forEach((tag) => initTags.add(tag)) })
    initTags = [...initTags].map((tag, i) => (
        {
            name: tag,
            active: i === 0
        }
    ))
    const [tags, setTags] = useState(initTags)

    useEffect(() => {
        const activeTagName = tags.find((tag) => tag.active).name
        if (activeTagName === 'All') {
            setFilteredObjArr([...objectArr])
        } else {
            setFilteredObjArr([...objectArr.filter((pr) => pr.tags.includes(activeTagName))])
        }
    }, [tags])

    const handleClick = (e) => {
        setTags([...tags].map((tag) => (
            {
                name: tag.name,
                active: tag.name === e.target.innerText
            }
        )))
    }

    return (
        <Box mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack direction="row" spacing={1}>
                {tags.map((tag, i) => (
                    <Chip
                        key={i}
                        label={tag.name}
                        size="small"
                        color={tag.active ? 'primary' : 'default'}
                        variant={tag.active ? 'default' : 'outlined'}
                        onClick={handleClick}
                    />
                ))}
            </Stack>
        </Box>
    )
}
export default TagFilter
