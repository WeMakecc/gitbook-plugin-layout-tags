module.exports = {
    blocks: {
        // image: {
        //     process: function(block) {
        //         return "<p style='overflow:hidden'><img src='"+block.body+"' alt='"+block.args[0]+"' width='"+block.args[1]+"' align='"+block.args[2]+"' style='"+block.args[3]+"'></p>";
        //     }
        // },
        image: {
            process: function(parentBlock) {
                return "<p style='overflow:hidden'><img src='"+block[0].body+"' alt='"+block.args[0]+"' width='"+block.args[1]+"' align='"+block.args[2]+"' style='"+block.args[3]+"'>"+block[1].body+"</p>";
            }
        },
        grid: {
            blocks: ['col'],
            process: function(parentBlock) {
                var columns = '';
                console.log(parentBlock.blocks);
                parentBlock.blocks.forEach((block) => {
                  columns += `<div style="flex: ${block.args[0]};">${block.body}</div>`;
                });

                return `<div style="display: flex;">${columns}</div>`;
            }
        }
    }
};