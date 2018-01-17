module.exports = {
    blocks: {
        tag1: {
            process: function(block) {
                return "<p style="color:blue;">"+block.body+"</p>";
            }
        }
    }
};