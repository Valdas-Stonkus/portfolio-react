import { Box, Chip, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { sortObjectByValue } from '../../functions/utils'

const TagFilter = ({ objectArr, setFilteredObjArr }) => {
    let initTags = new Set(['All'])
    objectArr.forEach((pr) => { pr.tags.forEach((tag) => initTags.add(tag)) })
    initTags = [...initTags].map((tag, i) => (
        {
            name: tag,
            active: i === 0,
            count: 0
        }
    ))
    const tagCounter = {}
    objectArr.forEach((obj) => {
        obj.tags.forEach((tag) => {
            if (tagCounter[tag]) {
                tagCounter[tag] += 1
            } else {
                tagCounter[tag] = 1
            }
        })
    })
    initTags.forEach((tag) => { tag.count = tagCounter[tag.name] })
    initTags = sortObjectByValue(initTags)

    const [tags, setTags] = useState(initTags)

    useEffect(() => {
        const activeTagName = tags.find((tag) => tag.active === true).name
        if (activeTagName === 'All') {
            setFilteredObjArr([...objectArr])
        } else {
            setFilteredObjArr([...objectArr.filter((pr) => pr.tags.includes(activeTagName))])
        }
    }, [tags])

    const handleClick = (e) => {
        const tagText = e.target.innerText.split(' ')[0]
        setTags([...tags].map((tag) => (
            {
                name: tag.name,
                active: tag.name === tagText,
                count: tag.count
            }
        )))
    }

    return (
        <Box mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack
                direction="row"
                justifyContent="center"
                flexWrap="wrap"
                gap={1}
            >
                {tags.map((tag, i) => (
                    <Chip
                        key={i}
                        label={`${tag.name} (${tag.name === 'All' ? objectArr.length : tag.count})`}
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
