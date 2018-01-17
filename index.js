module.exports = {
    blocks: {
        image: {
            process: function(block) {
                return "<img src='"+block.body+"' alt='"+block.args[0]+"' width='"+block.args[1]+"' align='"+block.args[2]+"' style='"+block.args[2]+"'>";
            }
        }
    }
};