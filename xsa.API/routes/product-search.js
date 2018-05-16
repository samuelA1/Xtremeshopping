const router = require('express').Router();
const algoliasearch = require('algoliasearch');

const client = algoliasearch('45PFEO9EZL', '8557f62f77a0d0d6e90e6ee2a9be8822');
const index = client.initIndex('xtreme');

router.get('/', (req, res, next) => {
    if (req.query.query) {
        index.search({
            query: req.query.query,
            page: req.query.page}, (err, content) => {
                res.json({
                    success: true,
                    message: 'search successful',
                    status: 200,
                    content: content,
                    search_results: req.query.query
                })
            })
    }
})

module.exports = router;
