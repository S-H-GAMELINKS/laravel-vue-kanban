<template>
    <div class="container">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#stageModal" v-on:click="setStage(stage)">
            Add Stage
        </button>
        <div class="modal fade" id="stageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Stage Name</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <input v-model="new_stage" class="form-control">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="addStage">Add</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>        
        <kanban-board :stages="stages" :blocks="blocks">
            <div v-for="stage in stages" :slot="stage" :key="stage">
                <h2>{{ stage }}</h2>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal" v-on:click="setStage(stage)">
                    Add
                </button>
                <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <textarea v-model="title" class="form-control"></textarea>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="addBlock">Add</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="block in blocks" :slot="block.id" :key="block.id">
                <div>
                    <strong>id:</strong> {{ block.id }}
                </div>
                <div>
                    {{ block.title }}
                </div>
            </div>
        </kanban-board>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: "",
            stage: "",
            stages: [],
            blocks: []
        }
    },
    methods: {
        updateBlock(id, status) {
            this.blocks.find(b => b.id === Number(id)).status = status;
        },
        addBlock() {
            let id = this.blocks.length + 1
            this.blocks.push({
                id: id,
                status: this.stage,
                title: this.title
            })
            this.title = ""
        },
        addStage() {
            if(this.stages.indexOf(this.new_stage) == -1) {
                this.stages.push(this.new_stage)
                this.new_stage = ""
            } else {
                alert("既に作成済みです！")
                this.new_stage = ""
            }
        },
        setStage(stage) {
            this.stage = stage
        }
    },    
}
</script>

